const PRESETS = [50, 100, 250, 500]

export default function PresetAmountButtons({ value, onChange }) {
  return <div className="preset-row" aria-label="Preset virtual amounts">{PRESETS.map((amount) => <button key={amount} type="button" className={Number(value) === amount ? 'preset selected' : 'preset'} onClick={() => onChange(String(amount))}>₹{amount}</button>)}</div>
}