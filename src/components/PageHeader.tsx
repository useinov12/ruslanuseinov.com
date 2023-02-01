import clsx from 'clsx';
import { useTheme } from 'src/context/ThemeProvider';

export default function PageHeader({
  title,
  heading,
}: {
  title: string;
  heading: string;
}) {
  const { theme } = useTheme();
  return (
    <>
      <h1
        className={clsx(
          'my-4 text-center',
          theme === 'light' ? 'text-gray-800' : 'text-primary-500"'
        )}
        data-fade="1"
      >
        {title}
      </h1>
      <h6 className="font-semibold text-xl text-center mb-8" data-fade="2">
        {heading}
      </h6>
    </>
  );
}
