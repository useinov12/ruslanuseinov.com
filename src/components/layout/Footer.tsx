import React from 'react';
import clsx from 'clsx';
import UnstyledLink from '../UnstyledLink';
import Accent from '../Accent';
import Tooltip from '../Tooltip';

const Footer: React.FC = () => {
  return (
    <footer
      className={clsx(
        'max-w-screen-lg m-auto',
        'bg-dark text-white',
        'px-3 lg:px-0 pt-4 mt-12',
        'border-t-2 border-t-gray-300',
        'flex flex-col items-center'
      )}
    >
      <ul className="inline-flex gap-4 ">
        <li>
          <UnstyledLink
            href="https://github.com/useinov12/ruslanuseinov.com"
            className={clsx(
              'text-gray-300 hover:text-white',
              'focus:outline-none',
              'transition-colors',
              'cursor-alias'
            )}
          >
            <h4>Source Code</h4>
          </UnstyledLink>
        </li>
        <li>
          <Tooltip
            interactive
            hideOnClick={false}
            content={
              <div className="text-lg font-bold">
                <p id="email-tooltip-text-footer">Click to copy</p>
                <Accent className="font-bold">me@ruslan-useinov.com</Accent>
              </div>
            }
          >
            <h4
              className="cursor-pointer text-gray-300 hover:text-white"
              onClick={() =>
                copyToClipboard({
                  text: 'me@ruslan-useinov.com',
                  id: 'email-tooltip-text-footer',
                })
              }
            >
              Email
            </h4>
          </Tooltip>
        </li>
        <li>
          <UnstyledLink
            href="https://github.com/useinov12"
            className={clsx(
              'text-gray-300 hover:text-white',
              'focus:outline-none',
              'cursor-alias'
            )}
          >
            <h4>Github</h4>
          </UnstyledLink>
        </li>
        <li>
          <UnstyledLink
            href="https://www.linkedin.com/in/ruslan-useinov-330b5a23a"
            className={clsx(
              'text-gray-300 hover:text-white',
              'focus:outline-none',
              'cursor-alias'
            )}
          >
            <h4>LinkedIn</h4>
          </UnstyledLink>
        </li>
      </ul>
      <h6
        className={clsx(
          'text-gray-300 hover:text-primary-500',
          'font-semibold my-2',
          'cursor-default'
        )}
      >
        Ruslan Useinov 2022
      </h6>
    </footer>
  );
};

export default Footer;

function copyToClipboard({ text, id }: { text: string; id: string }) {
  const htmlMessage = document.querySelector(`#${id}`);
  const initialMessage = htmlMessage?.textContent!;

  navigator.clipboard.writeText(text).then(
    () => {
      if (htmlMessage) {
        htmlMessage.textContent = 'Copied!';
        setTimeout(() => {
          htmlMessage.textContent = initialMessage;
        }, 1500);
      }
    },
    () => {
      if (htmlMessage) {
        htmlMessage.textContent = 'Something happened... try to copy again';
        setTimeout(() => {
          htmlMessage.textContent = initialMessage;
        }, 1500);
      }
    }
  );
}
