import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ControlPanelBox } from './ControlPanelBox';
import ControlPanelIconImg from '../images/account_information_icon.png';
import IntlProvider from '../../../i18n/DopplerIntlProvider.double-with-ids-as-values';

const box = {
  linkUrl: '/ControlPanel/AccountPreferences/GetAccountInformation',
  imgSrc: ControlPanelIconImg,
  imgAlt: 'control_panel.account_preferences.account_information_title',
  iconName: 'control_panel.account_preferences.account_information_title',
};

it('should render a control panel box', async () => {
  //Act
  render(
    <IntlProvider>
      <ControlPanelBox box={box} />
    </IntlProvider>,
  );

  //Assert
  expect(screen.getByRole('img')).toBeInTheDocument();
  expect(screen.getByRole('link')).toBeInTheDocument();
  expect(screen.getByText(box.iconName)).toBeInTheDocument();
});

it('should render disabled control panel box', async () => {
  //Act
  render(
    <IntlProvider>
      <ControlPanelBox box={box} disabled={true} />
    </IntlProvider>,
  );

  //Assert
  expect(screen.getByRole('img').parentElement).toHaveAttribute('disabled');
});