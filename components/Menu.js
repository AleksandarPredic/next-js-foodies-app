import Link from "next/link";

export default function Menu() {
  return (
    <ul style={{color: 'white'}}>
      <li><Link href="/meals" style={{color: 'inherit'}}>Meals</Link></li>
      <li><Link href="/meals/share" style={{color: 'inherit'}}>Share Meals</Link></li>
      <li><Link href="/community" style={{color: 'inherit'}}>Community</Link></li>
    </ul>
  )
}