import React from 'react';
import Title from 'react-title-component';
import CodeExample from '../../../CodeExample';
import PropTypeDescription from '../../../PropTypeDescription';
import MarkdownElement from '../../../MarkdownElement';
import microbitReadmeText from './README';

const MicroBitPage = () => (
  <div>
    <Title render={(previousTitle) => `MicroBit - ${previousTitle}`} />
    <MarkdownElement text={microbitReadmeText} />
  </div>
);

export default MicroBitPage;
