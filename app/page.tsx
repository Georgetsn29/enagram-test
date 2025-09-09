"use client";
import { useState } from "react";
import { House, FileText, Mic, BarChart2, File } from "lucide-react";
import styles from "./page.module.css";

function diffTexts(oldText: string, newText: string) {
  const oldWords = oldText.split(/\s+/);
  const newWords = newText.split(/\s+/);

  let i = 0,
    j = 0;
  const oldResult: React.ReactNode[] = [];
  const newResult: React.ReactNode[] = [];

  while (i < oldWords.length || j < newWords.length) {
    if (oldWords[i] === newWords[j]) {
      oldResult.push(
        <span key={`o-${i}`} style={{ color: "#000" }}>
          {oldWords[i]}{" "}
        </span>
      );
      newResult.push(
        <span key={`n-${j}`} style={{ color: "#000" }}>
          {newWords[j]}{" "}
        </span>
      );
      i++;
      j++;
    } else {
      if (oldWords[i] && !newWords.includes(oldWords[i])) {
        oldResult.push(
          <span
            key={`o-${i}`}
            style={{ color: "#065f46", background: "#d1fae5"  }}
          >
            {oldWords[i]}{" "}
          </span>
        );
        i++;
      } else if (newWords[j] && !oldWords.includes(newWords[j])) {
        newResult.push(
          <span key={`n-${j}`} style={{ color: "#991b1b", background: "#fee2e2" }}>
            {newWords[j]}{" "}
          </span>
        );
        j++;
      } else {
        if (oldWords[i]) {
          oldResult.push(<span key={`o-${i}`}>{oldWords[i]} </span>);
          i++;
        }
        if (newWords[j]) {
          newResult.push(<span key={`n-${j}`}>{newWords[j]} </span>);
          j++;
        }
      }
    }
  }

  return { oldResult, newResult };
}

export default function Home() {
  const [oldText, setOldText] = useState("");
  const [newText, setNewText] = useState("");
  const [compared, setCompared] = useState(false);
  const [oldResult, setOldResult] = useState<React.ReactNode[] | null>(null);
  const [newResult, setNewResult] = useState<React.ReactNode[] | null>(null);

  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(false);

  const [collapsed, setCollapsed] = useState(false);

  const handleCompare = () => {
    setLoading(true);
    setProgress(0);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          const { oldResult, newResult } = diffTexts(oldText, newText);
          setOldResult(oldResult);
          setNewResult(newResult);
          setCompared(true);
          setLoading(false);
          return 100;
        }
        return prev + 5;
      });
    }, 100);
  };

  const handleReset = () => {
    setOldText("");
    setNewText("");
    setCompared(false);
    setOldResult(null);
    setNewResult(null);
    setProgress(0);
    setLoading(false);
  };

  const isDisabled = oldText.trim() === "" || newText.trim() === "";

  return (
    <div className={styles.app}>
      {/* Sidebar */}
      <aside
        className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}
      >
        <div className={styles.topSection}>
          <div className={styles.logo}>
            <img src="./ძირითადი-ლოგო.png" alt="logo" className={styles.logoImg} />
            {!collapsed && <span className={styles.logoText}>ENAGRAM</span>}
          </div>
          <button
            className={styles.collapseBtn}
            onClick={() => setCollapsed(!collapsed)}
          >
            {collapsed ? "»" : "«"}
          </button>
        </div>

        <ul className={styles.menu}>
          <li>
            <b></b>
            <b></b>
            <House size={18} /> {!collapsed && "მთავარი"}
          </li>
          <li className={styles.active}>
            <b></b>
            <b></b>
            <FileText size={18} /> {!collapsed && "ტექსტის შედარება"}
          </li>
          <li>
            <b></b>
            <b></b>
            <Mic size={18} /> {!collapsed && "ხმა → ტექსტი"}
          </li>
          <li>
            <b></b>
            <b></b>
            <BarChart2 size={18} /> {!collapsed && "ტექსტი → ხმა"}
          </li>
          <li>
            <b></b>
            <b></b>
            <File size={18} /> {!collapsed && "PDF კონვერტაცია"}
          </li>
        </ul>

        <div className={styles.footerMenu}>
          {!collapsed && <span>გიორგი ცნობილაძე</span>}
        </div>
      </aside>

      {/* Main content */}
      <div className={styles.main}>
        <header className={styles.header}>
          <div className={styles.check}>
            <select className={styles.select}>
              <option value="">ქართული</option>
              <option value="">English</option>
            </select>
            <label>
              <input type="checkbox" name="" id="" />
              ფორმატის შენარჩუნება
            </label>
          </div>
          <button className={styles.newBtn}> + ახლის გახსნა</button>
        </header>

        <div className={styles.content}>
  <div className={styles.textBox}>
    {!compared ? (
      <textarea
        className={styles.textarea}
        value={oldText}
        onChange={(e) => setOldText(e.target.value)}
        placeholder="დაიწყე წერა..."
      />
    ) : (
      <div className={styles.result}>{oldResult}</div>
    )}
  </div>

  <span className={styles.swapIcon}>&harr;</span> {/* <-- arrow between */}

  <div className={styles.textBox}>
    {!compared ? (
      <textarea
        className={styles.textarea}
        value={newText}
        onChange={(e) => setNewText(e.target.value)}
        placeholder="დაიწყე წერა..."
      />
    ) : (
      <div className={styles.result}>{newResult}</div>
    )}
  </div>
</div>


        <div className={styles.actions}>
          {!compared ? (
            <button
              onClick={handleCompare}
              className={`${styles.compareBtn} ${
                isDisabled ? styles.disabledBtn : ""
              }`}
              disabled={isDisabled || loading}
            >
              შედარება
            </button>
          ) : (
            <button onClick={handleReset} className={styles.reloadBtn}>
              თავიდან
            </button>
          )}
        </div>

        {loading && (
          <div className={styles.overlay}>
            <div className={styles.progressContainer}>
              <div className={styles.circle}>
                <div className={styles.dot}></div>
              </div>
              <div className={styles.progressInfo}>
                <p>Converting... Thank you For your Patience</p>
                <div className={styles.progressWrapper}>
                  <span className={styles.percent}>{progress}%</span>
                  <div className={styles.progressBar}>
                    <div
                      className={styles.progressFill}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
