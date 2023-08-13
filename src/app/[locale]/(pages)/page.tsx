import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { Bio } from '@/components/network/Bio/Bio';
import { Card } from '@/components/ui/Card/Card';
import { Seperator } from '@/components/ui/Seperator/Seperator';
import { Slider } from '@/components/ui/Slider/Slider';
import { Timeline } from '@/components/ui/Timeline/Timeline';
import { Title } from '@/components/ui/Title/Title';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.home.meta');

  return {
    title: t('title'),
  };
}

export default function HomePage() {
  const t = useTranslations('pages.home');

  return (
    <Page title={t('title')} backgroundImage="https://placehold.co/600x400/png">
      <Container maxWidth="lg" gap="xs" verticalPadding="lg">
        <Title>
          {t.rich('about_me.title', {
            tag: (chunks) => <span className="italic">{chunks}</span>,
          })}
        </Title>

        <p className="text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit non architecto nulla minus
          explicabo magni dicta quasi iure molestiae. Quam tenetur eum perferendis explicabo dolor
          quod deserunt dignissimos natus nulla. Corrupti delectus esse repudiandae quis! Culpa sit
          facilis ipsam hic qui, magni nam illo? Dolorem suscipit unde hic. Itaque dolorum soluta
          nihil, tenetur placeat fuga eveniet illum vel sunt aliquam?
        </p>
      </Container>

      <Container verticalPadding="none">
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
      </Container>

      <Container verticalPadding="none">
        <Seperator />
      </Container>

      <Container maxWidth="lg">
        <Timeline
          year={1990}
          message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam">
          {Array.from({ length: 5 }, (_, i) => (
            <Timeline.Item key={i} year={i !== 0 ? 1990 + i : undefined}>
              <Card src="https://placehold.co/600x400/png">
                <h3 className="text-4xl uppercase italic">Card #{i + 1}</h3>

                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                </p>
              </Card>
            </Timeline.Item>
          ))}
        </Timeline>
      </Container>

      <Container verticalPadding="none">
        <Seperator />
      </Container>

      <Container maxWidth="lg" verticalPadding="lg">
        <Bio />
      </Container>
    </Page>
  );
}
