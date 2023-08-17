import Link from "next/link";

export default function NavBar({active}) {
    return (
        <nav className="bg-slate-900 p-6 flex justify-between items-center">
            <ul className="flex gap-12 items-end text-slate-400 text-sm">
                <li>
                    <a href="#">
                        <h1 className="text-2xl font-bold text-slate-100">PiggyBank</h1>
                    </a>
                </li>
                <li>
                    <Link className={active=="despesa" && "text-slate-300"} href="/despesa">
                        despesa
                    </Link>
                </li>
                <li>
                    <Link className={active=="produto" && "text-slate-300"} href="/produto">
                        produto
                    </Link>
                </li>
                <li>
                    <Link className={active=="categorias" && "text-slate-300"} href="/categorias">
                        categorias
                    </Link>
                </li>
                <li>
                    <Link className={active=="metas" && "text-slate-300"} href="/metas">
                        metas
                    </Link>
                </li>
            </ul>

            <div className="h-12 w-12 rounded-full overflow-hidden">
                <img src="https://i.pravatar.cc/100" alt="avatar do usuário" />
            </div>
        </nav>
    )
}