import React from 'react';
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine
} from 'react-sparklines';
import _ from 'lodash';

const avarage = data => {
  return _.round(_.sum(data)/data.length, 2);
}

export default ({ data, color, units }) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color}></SparklinesLine>
        <SparklinesReferenceLine type="avg"></SparklinesReferenceLine>
      </Sparklines>
      <div>{avarage(data)} {units}</div>
    </div>
  )
}
