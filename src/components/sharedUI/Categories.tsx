import clsx from 'clsx';

export default function Categories() {
  return (
    <ul className="inline-flex flex-wrap gap-1 w-full my-2" data-fade="3">
      {['React', 'Typescript', 'Tailwind CSS', 'Next Js', 'Projects'].map(
        (category) => (
          <li
            key={category}
            className={clsx(
              'cursor-pointer',
              'bg-blue-500/80 px-3 py-1 rounded-md ',
              'scale-100 hover:scale-[1.03]'
            )}
          >
            <p className="text-sm font-poppins font-medium">{category}</p>
          </li>
        )
      )}
    </ul>
  );
}
