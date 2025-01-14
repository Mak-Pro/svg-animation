import Link from 'next/link'

export default function AccessButton(props: any) {
  return (
    <Link href="/#cta">
      <div className={(props.short ? "btn-sm" : "btn") + " bg-black text-white flex mx-auto w-fit hover:bg-zinc-700 transition-all duration-200"}>
        Try risk free
        <svg className="w-3 h-3 flex-shrink-0 mt-px ml-2 transition ease-in-out delay-100" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
          <path className="fill-current" d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z" />
        </svg>
      </div>
    </Link>
  );
}
