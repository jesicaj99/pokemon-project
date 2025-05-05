import Link from "next/link";
import Image from "next/image";
import pokemonImg from '@/public/pokemon.png';


export default function NavBar() {
    return (
      <>
      <Image src={pokemonImg} alt="pokemon logo" height={60}/>
      <Link href="/">Home</Link>
      <Link href="/type">Type</Link>
      <Link href="/color">Color</Link>
      <Link href="/habitat">Habitats</Link>
      </>
    );
  }