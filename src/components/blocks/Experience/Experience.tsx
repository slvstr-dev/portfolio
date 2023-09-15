import { useTranslations } from 'next-intl';

import { Anchor } from '@/components/ui/Anchor/Anchor';
import { Card } from '@/components/ui/Card/Card';
import { Timeline } from '@/components/ui/Timeline/Timeline';
import { Title } from '@/components/ui/Title/Title';

export interface ExperienceProps {
  className?: string;
}

export function Experience({ className }: ExperienceProps) {
  const t = useTranslations('components.blocks.experience');

  return (
    <article className={className}>
      <Title>
        {t.rich('title', {
          tag: (chunks) => <span className="italic">{chunks}</span>,
        })}
      </Title>

      <Timeline
        year={Number(t('year'))}
        message={t.rich('message', {
          tag: (chunks) => (
            <Anchor href={process.env.NEXT_PUBLIC_LINKEDIN_PROFILE}>{chunks}</Anchor>
          ),
        })}>
        <Timeline.Item>
          <Card>
            <h3 className="text-4xl uppercase italic">{t('experience.personal.title')}</h3>

            <h4 className="text-2xl lowercase italic">{t('experience.personal.type')}</h4>
          </Card>
        </Timeline.Item>

        <Timeline.Item year={Number(t('experience.fotofabriek.internship.year'))}>
          <Card>
            <h3 className="text-4xl uppercase italic">
              {t('experience.fotofabriek.internship.title')}
            </h3>

            <h4 className="text-2xl lowercase italic">
              {t('experience.fotofabriek.internship.company')} ·{' '}
              {t('experience.fotofabriek.internship.type')}
            </h4>
          </Card>
        </Timeline.Item>

        <Timeline.Item year={Number(t('experience.fotofabriek.full_time.year'))}>
          <Card>
            <h3 className="text-4xl uppercase italic">
              {t('experience.fotofabriek.full_time.title')}
            </h3>

            <h4 className="text-2xl lowercase italic">
              {t('experience.fotofabriek.full_time.company')} ·{' '}
              {t('experience.fotofabriek.full_time.type')}
            </h4>

            <ul className="mt-4 list-inside list-disc">
              {t.rich('experience.fotofabriek.full_time.responsibilities', {
                tag: (chunks) => <li>{chunks}</li>,
              })}
            </ul>
          </Card>
        </Timeline.Item>

        <Timeline.Item year={Number(t('experience.2_digits_agency.year'))}>
          <Card>
            <h3 className="text-4xl uppercase italic">{t('experience.2_digits_agency.title')}</h3>

            <h4 className="text-2xl lowercase italic">
              {t('experience.2_digits_agency.company')} · {t('experience.2_digits_agency.type')}
            </h4>

            <ul className="mt-4 list-inside list-disc">
              {t.rich('experience.2_digits_agency.responsibilities', {
                tag: (chunks) => <li>{chunks}</li>,
              })}
            </ul>
          </Card>
        </Timeline.Item>
      </Timeline>
    </article>
  );
}
