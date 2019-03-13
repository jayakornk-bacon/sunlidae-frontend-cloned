import { css } from 'styled-components/macro';

const init = css`
  input,
  textarea,
  select {
    border: 1px solid ${({ theme }) => theme.accent4};
    border-radius: 0.5rem;
    display: block;
    /* margin-bottom: 1.5rem; */
    padding: 0.25rem 1rem;
  }

  .select {
    position: relative;

    & + & {
      margin-left: .5rem;
    }

    &::after {
      content: '\f0d7';
      font-size: 1.4rem;
      font-weight: 900;
      line-height: 1;
      pointer-events: none;
      position: absolute;
      top: 50%;
      right: .85rem;
      transform: translateY(-50%);
    }
  }

  select {
    padding-right: 2.5rem;
  }

  a {
    color: ${({ theme }) => theme.accent};

    &:hover {
      color: #4D95D0;
    }
  }

  .text-monospace {
    font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace !important;
  }

  .text-justify {
    text-align: justify !important;
  }

  .text-wrap {
    white-space: normal !important;
  }

  .text-nowrap {
    white-space: nowrap !important;
  }

  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .text-left {
    text-align: left !important;
  }

  .text-right {
    text-align: right !important;
  }

  .text-center {
    text-align: center !important;
  }

  @media (min-width: 576px) {
    .text-sm-left {
      text-align: left !important;
    }
    .text-sm-right {
      text-align: right !important;
    }
    .text-sm-center {
      text-align: center !important;
    }
  }

  @media (min-width: 768px) {
    .text-md-left {
      text-align: left !important;
    }
    .text-md-right {
      text-align: right !important;
    }
    .text-md-center {
      text-align: center !important;
    }
  }

  @media (min-width: 992px) {
    .text-lg-left {
      text-align: left !important;
    }
    .text-lg-right {
      text-align: right !important;
    }
    .text-lg-center {
      text-align: center !important;
    }
  }

  @media (min-width: 1200px) {
    .text-xl-left {
      text-align: left !important;
    }
    .text-xl-right {
      text-align: right !important;
    }
    .text-xl-center {
      text-align: center !important;
    }
  }

  .text-muted {
    color: #6c757d !important;
  }

  .card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
  }

  .card > hr {
    margin-right: 0;
    margin-left: 0;
  }

  .card > .list-group:first-child .list-group-item:first-child {
    border-top-left-radius: 0.25rem;
    border-top-right-radius: 0.25rem;
  }

  .card > .list-group:last-child .list-group-item:last-child {
    border-bottom-right-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;
  }

  .card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    padding: 1.25rem;
  }

  .card-title {
    margin-bottom: 0.75rem;
  }

  .card-subtitle {
    margin-top: -0.375rem;
    margin-bottom: 0;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-link:hover {
    text-decoration: none;
  }

  .card-link + .card-link {
    margin-left: 1.25rem;
  }

  .card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card-header:first-child {
    border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
  }

  .card-header + .list-group .list-group-item:first-child {
    border-top: 0;
  }

  .card-footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card-footer:last-child {
    border-radius: 0 0 calc(0.25rem - 1px) calc(0.25rem - 1px);
  }

  .card-header-tabs {
    margin-right: -0.625rem;
    margin-bottom: -0.75rem;
    margin-left: -0.625rem;
    border-bottom: 0;
  }

  .card-header-pills {
    margin-right: -0.625rem;
    margin-left: -0.625rem;
  }

  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
  }

  .card-img {
    width: 100%;
    border-radius: calc(0.25rem - 1px);
  }

  .card-img-top {
    width: 100%;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
  }

  .card-img-bottom {
    width: 100%;
    border-bottom-right-radius: calc(0.25rem - 1px);
    border-bottom-left-radius: calc(0.25rem - 1px);
  }

  .card-deck {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .card-deck .card {
    margin-bottom: 15px;
  }

  @media (min-width: 576px) {
    .card-deck {
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
    .card-deck .card {
      display: -ms-flexbox;
      display: flex;
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
      -ms-flex-direction: column;
      flex-direction: column;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
    }
  }

  .card-group {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .card-group > .card {
    margin-bottom: 15px;
  }

  @media (min-width: 576px) {
    .card-group {
      -ms-flex-flow: row wrap;
      flex-flow: row wrap;
    }
    .card-group > .card {
      -ms-flex: 1 0 0%;
      flex: 1 0 0%;
      margin-bottom: 0;
    }
    .card-group > .card + .card {
      margin-left: 0;
      border-left: 0;
    }
    .card-group > .card:not(:last-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    .card-group > .card:not(:last-child) .card-img-top,
    .card-group > .card:not(:last-child) .card-header {
      border-top-right-radius: 0;
    }
    .card-group > .card:not(:last-child) .card-img-bottom,
    .card-group > .card:not(:last-child) .card-footer {
      border-bottom-right-radius: 0;
    }
    .card-group > .card:not(:first-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    .card-group > .card:not(:first-child) .card-img-top,
    .card-group > .card:not(:first-child) .card-header {
      border-top-left-radius: 0;
    }
    .card-group > .card:not(:first-child) .card-img-bottom,
    .card-group > .card:not(:first-child) .card-footer {
      border-bottom-left-radius: 0;
    }
  }

  .card-columns .card {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 576px) {
    .card-columns {
      -webkit-column-count: 3;
      -moz-column-count: 3;
      column-count: 3;
      -webkit-column-gap: 1.25rem;
      -moz-column-gap: 1.25rem;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1;
    }
    .card-columns .card {
      display: inline-block;
      width: 100%;
    }
  }
`;

export default init;
