/**
 * @file 按钮组
 * @author cmt
 * @description: 按钮组, 默认超过 3 个, 显示更多按钮
 */

import { Dropdown, Space } from 'antd';
import React from 'react';

interface ButtonGroupProps {
  buttons: React.ReactNode[];
  max?: number;
  getOverlayContainer?: () => HTMLElement | null;
}

const MoreDropdown = (props: {
  moreButtons: React.ReactNode[];
  getOverlayContainer?: () => HTMLElement | null;
}) => {
  const { moreButtons, getOverlayContainer } = props;
  const items = moreButtons.map((item, index) => ({
    key: index,
    label: <a key={index}>{item}</a>,
  }));
  return (
    <Dropdown
      placement="bottomCenter"
      getPopupContainer={(node) => node.parentElement || document.body}
      menu={{ items }}
    >
      <a>更多</a>
    </Dropdown>
  );
};

export default function ButtonGroup(props: ButtonGroupProps) {
  const demoButton = ['test1', 'test2', 'test3', 'test4'].map((item, index) => {
    return <a key={index}>{item}</a>;
  });
  const { buttons = demoButton, max = 3, getOverlayContainer } = props;

  const showMore = buttons.length > max;

  const outsideButtons = showMore ? buttons.slice(0, max - 1) : buttons;

  const moreButtons = buttons.slice(max - 1);

  return (
    <Space size="middle">
      {outsideButtons}
      {showMore && (
        <MoreDropdown
          moreButtons={moreButtons}
          getOverlayContainer={getOverlayContainer}
        />
      )}
    </Space>
  );
}
