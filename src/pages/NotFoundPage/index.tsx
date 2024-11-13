'use client';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-[#22284a] font-semibold text-[24px] leading-[28px] text-left w-[322px]">
        404 - Страница не найдена
      </h1>
      <p className="text-[#22284a] text-[1.5rem] mb-8">
        Похоже, что вы зашли на несуществующую страницу.
      </p>
      <Link href="/">
        <button className="flex justify-between items-center rounded-[16px] bg-gradient-to-b from-[#5dc416] to-[#367b05] border-[3px] border-[#95ff4ba3] shadow-[0px_4px_8px_0px_rgba(61,147,0,0.48),0px_0px_0px_4px_rgba(91,192,20,0.24)] p-[10px_12px] text-white text-center hover:border-[4px] hover:shadow-[0px_0px_0px_6px_rgba(91,192,20,0.24)] hover:p-[9px_11px] active:border-[2px] active:p-[11px_13px]">
          Вернуться на главную
        </button>
      </Link>
    </div>
  );
}
