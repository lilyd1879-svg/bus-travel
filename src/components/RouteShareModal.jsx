import React from 'react';
import { Share2, X, Check, Copy } from 'lucide-react';
import { formatWon } from '../utils/geoUtils.js';

export default function RouteShareModal({ route, isOpen, onClose }) {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen || !route) return null;

  const shareText = `🚌 [한국 시내버스 여행 경로]
📍 구간: ${route.startStopName} → ${route.endStopName}
⏱️ 총 소요시간: ${route.totalDurationText}
🔄 총 환승: ${route.transferCount}회 | 💵 총 요금: ${formatWon(route.totalFare)}
--------------------------------------
${route.segments.map(s => `${s.step}. [${s.routeNo}] ${s.fromStop} (${s.depTime}) → ${s.toStop} (${s.arrTime})`).join('\n')}
--------------------------------------
💡 순수 시내버스 100% 로만 다녀오는 전국 일주 코스!`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title-row">
            <Share2 className="modal-icon" size={22} />
            <h3>시내버스 여행 일정표 공유</h3>
          </div>
          <button className="close-btn" onClick={onClose}><X size={20} /></button>
        </div>

        <div className="modal-body">
          <p className="modal-desc">
            아래 텍스트 일정표를 복사하여 블로그, 카카오톡, 커뮤니티에 공유해보세요!
          </p>
          <textarea
            className="share-textarea"
            readOnly
            rows={10}
            value={shareText}
          />
        </div>

        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>닫기</button>
          <button className="btn-primary" onClick={handleCopy}>
            {copied ? <Check size={16} /> : <Copy size={16} />}
            <span>{copied ? '복사 완료!' : '클립보드 복사'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
