import Link from "next/link"

export default function Heart() {
	return (
		<Link href={"/gallery"}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="heart animate-heartbeat"></div>
            </div>
		</Link>
	)
}