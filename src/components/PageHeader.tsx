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
          'my-4 text-primary-500"',
          theme === 'light' ? 'text-gray-800' : 'text-primary-500"'
        )}
        data-fade="1"
      >
        {title}
      </h1>
      <h6 className="font-semibold text-xl " data-fade="2">
        {heading}
      </h6>
      <div
        className={clsx(
          'w-full h-[1px] mb-8 mt-4 rounded-lg',
          theme === 'light' ? 'bg-gray-800' : 'bg-gray-300'
        )}
        data-fade="3"
      />
    </>
  );
}
