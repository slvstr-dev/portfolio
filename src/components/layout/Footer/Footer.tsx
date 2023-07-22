import { useTranslations } from 'next-intl';
import Link from 'next-intl/link';

export default function Footer() {
  const t = useTranslations('components.footer');

  return (
    <footer className="p-2 text-center">
      <p>
        {t.rich('copyright', {
          link: (chunks) => (
            <Link
              href="https://www.linkedin.com/in/sylvesterhofstra/"
              target="_blank"
              className="transition-opacity hover:opacity-50">
              {chunks}
            </Link>
          ),
          date: new Date().getFullYear(),
        })}
      </p>
    </footer>
  );
}
