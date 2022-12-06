import Link from 'next/link';

export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div <img src="https://scontent.fzag1-2.fna.fbcdn.net/v/t39.30808-6/314406395_112666161656461_2044948279119832601_n.jpg?_nc_cat=101&amp;ccb=1-7&amp;_nc_sid=09cbfe&amp;_nc_ohc=rgOS2Hl5eBQAX8Nke0y&amp;_nc_ht=scontent.fzag1-2.fna&amp;oh=00_AfC5HDnM1t5_RvLSylW-n1cIFH46HDuFeRkUwO8uNN631A&amp;oe=6394FE43" width="80px;" style="border-radius:100px;">/>
      <p className="text-2xl dark:text-white text-center">
        <Link href="/">
          <a>{name}</a>
        </Link>
      </p>
    </header>
  );
}
