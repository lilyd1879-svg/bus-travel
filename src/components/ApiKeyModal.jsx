import React, { useState } from 'react';
import { Key, X, ExternalLink, CheckCircle, ShieldAlert } from 'lucide-react';
import { getStoredApiKey, setStoredApiKey } from '../engine/tagoApi.js';

export default function ApiKeyModal({ isOpen, onClose }) {
  const [keyInput, setKeyInput] = useState(getStoredApiKey());
  const [savedStatus, setSavedStatus] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    setStoredApiKey(keyInput);
    setSavedStatus(true);
    setTimeout(() => {
      setSavedStatus(false);
      onClose();
    }, 1200);
  };

  const handleClear = () => {
    setKeyInput("");
    setStoredApiKey("");
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-row">
            <Key className="modal-icon" size={22} />
            <h3>공공데이터포털 (TAGO) API Key 연동</h3>
          </div>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">
            본 앱은 <strong>내장된 전국 시내버스 데이터베이스</strong>로 API Key 없이도 100% 동작합니다.<br/>
            실시간 버스 위치 및 지자체별 실시간 버스 도착 정보 연동을 원하시면 <strong>공공데이터포털(data.go.kr)</strong>의 API 인증키를 입력해주세요.
          </p>

          <div className="api-link-box">
            <ShieldAlert size={16} />
            <span>국토교통부_(TAGO)_버스노선정보 API 신청 페이지:</span>
            <a
              href="https://www.data.go.kr/data/15098534/openapi.do"
              target="_blank"
              rel="noreferrer"
              className="api-link"
            >
              공공데이터포털 바로가기 <ExternalLink size={14} />
            </a>
          </div>

          <div className="input-group">
            <label className="input-label">인증키 (Service Key Decoding / Encoding)</label>
            <input
              type="text"
              className="key-input-field"
              placeholder="공공데이터포털 발급 Service Key를 입력하세요..."
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
            />
          </div>

          {savedStatus && (
            <div className="status-toast success">
              <CheckCircle size={16} /> API Key가 성공적으로 저장되었습니다!
            </div>
          )}
        </div>

        <div className="modal-footer">
          {getStoredApiKey() && (
            <button className="btn-danger-outline" onClick={handleClear}>
              Key 삭제
            </button>
          )}
          <button className="btn-secondary" onClick={onClose}>취소</button>
          <button className="btn-primary" onClick={handleSave}>
            저장 및 적용
          </button>
        </div>
      </div>
    </div>
  );
}
