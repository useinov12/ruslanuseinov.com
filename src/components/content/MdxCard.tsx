import clsx from 'clsx';
import { ReactNode } from 'react';
import {
  BsFillInfoSquareFill,
  BsExclamationTriangleFill,
} from 'react-icons/bs';
import { MdDangerous, MdSpeakerNotes } from 'react-icons/md';

export function MdxCard({
  children,
  type,
}: {
  children: ReactNode;
  type: 'info' | 'attention' | 'danger' | undefined;
}) {
  return (
    <div
      className={clsx(
        'py-2 my-5',
        'rounded-md',
        'border-l-4',
        type === 'info'
          ? 'bg-primary-500/30 border-primary-500'
          : type === 'attention'
          ? 'bg-attention-500/30 border-attention-500'
          : type === 'danger'
          ? 'bg-danger-500/30 border-danger-500'
          : 'bg-gray-500/30 border-gray-500'
      )}
    >
      <div className="inline-flex gap-3 items-center px-3  ">
        {type === 'info' ? (
          <BsFillInfoSquareFill className="text-2xl " />
        ) : type === 'attention' ? (
          <BsExclamationTriangleFill className="text-2xl " />
        ) : type === 'danger' ? (
          <MdDangerous className="text-2xl " />
        ) : (
          <MdSpeakerNotes className="text-2xl " />
        )}

        <span className="font-mono font-semibold uppercase ">
          {type === 'info'
            ? 'info'
            : type === 'attention'
            ? 'attention'
            : type === 'danger'
            ? 'danger'
            : 'note'}
        </span>
      </div>
      <div className="">{children}</div>
    </div>
  );
}
