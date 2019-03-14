import React from 'react';
import styled from 'styled-components/macro';
import { darken, invert } from 'polished';

const ChipUnstyled = (props) => {
  const {
    className,
    tag: Tag = 'span',
    ...attributes
  } = props;

  const onClick = (e) => {
    if (props.disabled) {
      e.preventDefault();
      return;
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <Tag
      className={`chip ${className}`}
      {...attributes}
      onClick={onClick}
    />
  );
};

const Chip = styled(ChipUnstyled)`
  ${(props) => {
    const {
      bgColor = '#EDEDED',
      color = 'inherit',
    } = props;
    return (`
      &.chip {
        background-color: ${bgColor};
        border-radius: 2rem;
        color: ${color};
        display: inline-block;
        font-size: 1.6rem;
        font-weight: 700;
        line-height: 1;
        padding: 1rem;
        text-align: center;
        transition: all .3s;
        white-space: nowrap;
        vertical-align: baseline;

        a&:hover,
        button&:hover {
          background-color: ${darken(0.08, bgColor)};
          color: ${invert(bgColor)};
          text-decoration: none;
        }
      }

      & + & {
        margin-left: 1rem;
      }

      &:empty {
        display: none;
      }
    `);
  }}
`;

export default Chip;
