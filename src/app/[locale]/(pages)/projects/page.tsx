import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Title } from '@/components/ui/Title/Title';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.projects.meta');

  return {
    title: t('title'),
  };
}

export default function ProjectsPage() {
  const t = useTranslations('pages.projects');

  return (
    <Page title={t('title')}>
      <Container maxWidth="lg" gap="xs" verticalPadding="lg">
        <Title>
          {t.rich('intro.title', {
            tag: (chunks) => <span className="italic">{chunks}</span>,
          })}
        </Title>

        <p className="text-center">
          {t.rich('intro.description', {
            tag: (chunks) => (
              <Anchor href={process.env.NEXT_PUBLIC_GITHUB_PROFILE}>{chunks}</Anchor>
            ),
          })}
        </p>
      </Container>

      {/* <Container verticalPadding="none">
        <Seperator />
      </Container>

      <Container maxWidth="lg" gap="xs" verticalPadding="lg">
        <Slider>
          {Array.from({ length: 5 }, (_, i) => (
            <Card key={i} src="https://placehold.co/600x400/png" orientation="horizontal">
              <h3 className="text-4xl uppercase italic">Card #{i + 1}</h3>

              {Array.from({ length: i + 1 }, (_, j) => (
                <p key={j} className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                </p>
              ))}
            </Card>
          ))}
        </Slider>
      </Container> */}
    </Page>
  );
}
