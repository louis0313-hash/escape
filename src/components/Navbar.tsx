import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { Lang } from '../data/potteryData'
export default function Navbar({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const [open, setOpen] = useState(false)
  const labels = lang === 'zh' ? ['風土與窯火', '一物一姿', '窯火日誌', '工坊體驗'] : ['Heritage', 'Collection', 'Kiln journal', 'Visit']
  const links = ['heritage', 'gallery', 'philosophy', 'booking']
  return <header className="navbar"><a href="#home" className="brand"><span className="brand-mark">土</span><span>土與火的數位開窯<small>EARTH · FIRE · MIAOLI</small></span></a><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button><nav className={open ? 'nav-links open' : 'nav-links'}>{links.map((id, i) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{labels[i]}</a>)}</nav><button className="lang-switch" onClick={() => setLang(lang === 'zh' ? 'en' : 'zh')}>{lang === 'zh' ? '繁中 / EN' : 'EN / 繁中'}</button></header>
}
