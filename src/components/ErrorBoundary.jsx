import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          minHeight: '100vh',
          background: '#090d16',
          color: '#f8fafc',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2rem',
          textAlign: 'center',
          fontFamily: "'Noto Sans KR', sans-serif"
        }}>
          <div style={{
            background: 'rgba(30, 41, 59, 0.9)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            borderRadius: '16px',
            padding: '2.5rem',
            maxWidth: '550px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)'
          }}>
            <h2 style={{ fontSize: '1.6rem', color: '#f87171', marginBottom: '1rem' }}>
              ⚠️ 화면 렌더링 일시적 오류 발생
            </h2>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: '1.6' }}>
              전국 시내버스 경로 데이터를 불러오는 도중 안전 예외가 발생했습니다.<br/>
              아래 버튼을 누르면 즉시 초기 상태로 자동 복구됩니다.
            </p>
            <button
              onClick={this.handleReload}
              style={{
                background: 'linear-gradient(135deg, #0284c7, #2563eb)',
                color: '#ffffff',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '10px',
                fontWeight: 700,
                fontSize: '1rem',
                cursor: 'pointer',
                boxShadow: '0 4px 12px rgba(2, 132, 199, 0.4)'
              }}
            >
              🔄 앱 새로고침 및 복구하기
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
