import { format, parseISO } from 'date-fns';
import enUS from 'date-fns/locale/en-US';
import es from 'date-fns/locale/es';

export const Date = ({
  dateString,
  locale,
}: {
  dateString: string;
  locale: string;
}) => {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      {format(date, 'LLLL d, yyyy', { locale: locale === 'en-US' ? enUS : es })}
    </time>
  );
};

export default Date;