import Icon from './Icon'

export default function ResetDemoButton({ onReset }) {
  return <button className="button button-ghost" onClick={onReset}><Icon>↻</Icon><span>Reset Demo Account</span></button>
}