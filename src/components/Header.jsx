

import DemoBalance from './DemoBalance'
import Icon from './Icon'
import ResetDemoButton from './ResetDemoButton'

export default function Header({ balance, onReset, menuOpen, onMenuToggle, onNavigate }) {
  return <header className="topbar"><button className="brand brand-button" onClick={() => onNavigate('landing')}><span className="brand-mark"><Icon>✦</Icon></span><span>Only One King <small>PROJECT EXPERIENCE</small></span></button><nav className="desktop-nav" aria-label="Primary navigation"><button onClick={() => onNavigate('landing')}>Home</button><button onClick={() => onNavigate('home')}>Play</button><button onClick={() => onNavigate('results')}>Results</button><button onClick={() => onNavigate('history')}>History</button></nav><div className="header-actions"><DemoBalance balance={balance} /><span className="account-tag">Virtual Account</span><ResetDemoButton onReset={onReset} /><button className="mobile-reset" onClick={onReset} aria-label="Reset Demo Account">↻</button><button className="menu-button" onClick={onMenuToggle} aria-expanded={menuOpen} aria-label={menuOpen ? 'Close menu' : 'Open menu'}><span /><span /><span /></button></div></header>
}