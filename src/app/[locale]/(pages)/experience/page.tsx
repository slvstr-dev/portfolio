import { useTranslations } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { ParamsProps } from '@/app/[locale]/layout';
import { Container } from '@/components/layout/Container/Container';
import { Page } from '@/components/layout/Page/Page';
import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Card } from '@/components/ui/Card/Card';
import { Timeline } from '@/components/ui/Timeline/Timeline';
import { Title } from '@/components/ui/Title/Title';

export async function generateMetadata({ params: { locale } }: ParamsProps) {
  const t = await getTranslator(locale, 'pages.experience.meta');

  return {
    title: t('title'),
  };
}

export default function ExperiencePage() {
  const t = useTranslations('pages.experience');

  return (
    <Page title={t('title')}>
      <Container maxWidth="lg" gap="xs">
        <Title>
          {t.rich('timeline.title', {
            tag: (chunks) => <span className="italic">{chunks}</span>,
          })}
        </Title>

        <Timeline
          year={Number(t('timeline.year'))}
          message={t.rich('timeline.message', {
            tag: (chunks) => (
              <Anchor href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}>{chunks}</Anchor>
            ),
          })}>
          <Timeline.Item>
            <Card>
              <h3 className="text-4xl uppercase italic">
                {t('timeline.experience.personal.title')}
              </h3>

              <h4 className="text-2xl lowercase italic">
                {t('timeline.experience.personal.type')}
              </h4>
            </Card>
          </Timeline.Item>

          <Timeline.Item year={Number(t('timeline.experience.fotofabriek.internship.year'))}>
            <Card>
              <h3 className="text-4xl uppercase italic">
                {t('timeline.experience.fotofabriek.internship.title')}
              </h3>

              <h4 className="text-2xl lowercase italic">
                {t('timeline.experience.fotofabriek.internship.company')} ·{' '}
                {t('timeline.experience.fotofabriek.internship.type')}
              </h4>
            </Card>
          </Timeline.Item>

          <Timeline.Item year={Number(t('timeline.experience.fotofabriek.full_time.year'))}>
            <Card>
              <h3 className="text-4xl uppercase italic">
                {t('timeline.experience.fotofabriek.full_time.title')}
              </h3>

              <h4 className="text-2xl lowercase italic">
                {t('timeline.experience.fotofabriek.full_time.company')} ·{' '}
                {t('timeline.experience.fotofabriek.full_time.type')}
              </h4>

              <ul className="mt-4 list-inside list-disc">
                {t.rich('timeline.experience.fotofabriek.full_time.responsibilities', {
                  tag: (chunks) => <li>{chunks}</li>,
                })}
              </ul>
            </Card>
          </Timeline.Item>

          <Timeline.Item year={Number(t('timeline.experience.2_digits_agency.year'))}>
            <Card>
              <h3 className="text-4xl uppercase italic">
                {t('timeline.experience.2_digits_agency.title')}
              </h3>

              <h4 className="text-2xl lowercase italic">
                {t('timeline.experience.2_digits_agency.company')} ·{' '}
                {t('timeline.experience.2_digits_agency.type')}
              </h4>

              <ul className="mt-4 list-inside list-disc">
                {t.rich('timeline.experience.2_digits_agency.responsibilities', {
                  tag: (chunks) => <li>{chunks}</li>,
                })}
              </ul>
            </Card>
          </Timeline.Item>
        </Timeline>
      </Container>
    </Page>
  );
}
