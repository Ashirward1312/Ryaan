import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTopHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <style>{`
        .scroll-top-btn{
          position: fixed;
          right: 22px;
          bottom: 22px;
          width: 52px;
          height: 52px;
          border: none;
          outline: none;
          border-radius: 50%;
          background: linear-gradient(135deg, #c0392b, #e74c3c);
          color: #fff;
          font-size: 22px;
          font-weight: 700;
          cursor: pointer;
          box-shadow: 0 14px 30px rgba(192,57,43,0.35);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          opacity: 0;
          visibility: hidden;
          transform: translateY(16px) scale(0.92);
        }

        .scroll-top-btn.show{
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
        }

        .scroll-top-btn:hover{
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 18px 36px rgba(192,57,43,0.45);
        }

        .scroll-top-btn:active{
          transform: scale(0.96);
        }

        @media (max-width: 768px){
          .scroll-top-btn{
            width: 48px;
            height: 48px;
            right: 16px;
            bottom: 16px;
            font-size: 20px;
          }
        }
      `}</style>

      <button
        className={`scroll-top-btn ${visible ? "show" : ""}`}
        onClick={scrollTopHandler}
        aria-label="Scroll to top"
        title="Scroll to top"
      >
        ↑
      </button>
    </>
  );
}