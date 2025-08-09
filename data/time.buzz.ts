import * as ActTme from '../../00.time.unit/time.action';

import * as ActClk from '../../03.clock.unit/clock.action';

import * as ActCol from '../../97.collect.unit/collect.action';

import * as ActCns from '../../act/console.action';

import * as ActPvt from '../../act/pivot.action';
import * as ActDsk from '../../act/disk.action';


import * as ActBus from '../../99.bus.unit/bus.action';

var bit, lst, dex, src, dat;

export const initTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  
  //bit = await ste.hunt(ActBus.INIT_BUS, {
  //  idx: cpy.idx,
  //  src: bal.src,
  //  lst: [ActTme, ActClk],
  //  dat: bal.dat,
  //});

  //if (bal.val == 1) {
  //  bit = await ste.hunt(ActTrm.INIT_TERMINAL, {});
   // patch(ste, ActMnu.INIT_MENU, {});
 // }

     bal.slv({ intBit: { idx: 'init-time' } });
    


  return cpy;
};

export const testTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  
 

  //bit = await ste.hunt(ActCns.UPDATE_CONSOLE, {
  //  idx: 'cns00',
   // src: '--- time ' + "testing time",
  //});

  bal.slv({ tmeBit: { idx: 'test-time', src: 'testing-time' } });

  return cpy;
};

export const formatTime = (cpy: TimeModel, bal: TimeBit, ste: State) => {
  if (bal.src == null) bal.src = DateTime.now();
  src = DateTime.fromISO(bal.src).toLocaleString(DateTime.DATETIME_FULL);

  if (bal.slv != null) bal.slv({ tmeBit: { idx: 'format-time', src } });

  return cpy;
};

export const nowTime = (cpy: TimeModel, bal: TimeBit, ste: State) => {
  if (bal.slv != null)
    bal.slv({
      tmeBit: { idx: 'now-time', val: DateTime.now().toUnixInteger() },
    });
  return cpy;
};

export const updateTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  bit = await ste.hunt(ActTme.READ_TIME, {
    idx: bal.idx,
    bit: ActTme.CREATE_TIME,
  });
  var tmeBit = bit.tmeBit.dat;
  var dat = bal.dat;
  if (dat == null) dat = [];

  var date = DateTime.local(
    tmeBit.yrs,
    tmeBit.mth,
    tmeBit.day,
    tmeBit.hrs,
    tmeBit.min,
    tmeBit.sec,
  );

  if (dat.yrs == null) dat.yrs = 0;
  if (dat.mth == null) dat.mth = 0;
  if (dat.day == null) dat.day = 0;
  if (dat.hrs == null) dat.hrs = 0;
  if (dat.min == null) dat.min = 0;
  if (dat.sec == null) dat.sec = 0;

  date = date.plus({
    years: dat.yrs,
    months: dat.mth,
    days: dat.day,
    hours: dat.hrs,
    minutes: dat.min,
    seconds: dat.sec,
  });

  tmeBit.yrs = date.year;
  tmeBit.mth = date.month;
  tmeBit.day = date.day;
  tmeBit.hrs = date.hour;
  tmeBit.min = date.minute;
  tmeBit.sec = date.second;
  tmeBit.wek = date.weekNumber;
  tmeBit.qtr = date.quarter;
  tmeBit.cnt = Math.floor(
    date.diff(DateTime.local(tmeBit.yrs, 1, 1), 'days').days,
  );

  tmeBit.src = date.toFormat('MM-dd-yyyy, hh:mm:ss a');
  tmeBit.now = date.valueOf();

  bit = await ste.hunt(ActTme.WRITE_TIME, {
    idx: tmeBit.idx,
    dat: tmeBit,
    bit: ActTme.CREATE_TIME,
  });

  if (bal.slv != null)
    bal.slv({ tmeBit: { idx: 'update-time', dat: bit.tmeBit.dat } });

  return cpy;
};

export const writeTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  bit = await ste.hunt(ActCol.WRITE_COLLECT, {
    idx: bal.idx,
    dat: bal.dat,
    bit: ActTme.CREATE_TIME,
  });

  if (bal.slv != null)
    bal.slv({ tmeBit: { idx: 'write-time', dat: bit.clcBit.dat } });

  return cpy;
};

export const readTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  if (bal.idx == null) bal.idx = 'tme00';

  bit = await ste.hunt(ActCol.READ_COLLECT, {
    idx: bal.idx,
    bit: ActTme.CREATE_TIME,
  });

  if (bal.slv != null)
    bal.slv({ tmeBit: { idx: 'read-time', dat: bit.clcBit.dat } });

  return cpy;
};

export const createTime = (cpy: TimeModel, bal: TimeBit, ste: State) => {
  if (bal.idx == null) bal.idx = 'tme00';
  if (bal.src == null) bal.src = TIME.CLOCK;

  switch (bal.src) {
    case TIME.CLOCK:
      var clk: ClockBit = bal.dat;
      if (clk == null) clk = { idx: bal.idx };
      if (clk.idx == null) clk.idx = bal.idx;
      if (clk.src == null) clk.src = 'clk-bit';
      if (clk.val == null) clk.val = 0;
      if (clk.pst == null) clk.pst = 0;
      if (clk.qtr == null) clk.qtr = 0;
      if (clk.yrs == null) clk.yrs = 3210;
      if (clk.mth == null) clk.mth = 3;
      if (clk.wek == null) clk.wek = 3;
      if (clk.day == null) clk.day = 3;
      if (clk.hrs == null) clk.hrs = 3;
      if (clk.min == null) clk.min = 3;
      if (clk.sec == null) clk.sec = 3;

      var date = DateTime.local(
        clk.yrs,
        clk.mth,
        clk.day,
        clk.hrs,
        clk.min,
        clk.sec,
      );

      clk.yrs = date.year;
      clk.mth = date.month;
      clk.day = date.day;
      clk.hrs = date.hour;
      clk.min = date.minute;
      clk.sec = date.second;
      clk.cnt = Math.floor(
        date.diff(DateTime.local(clk.yrs, 1, 1), 'days').days,
      );
      clk.wek = date.weekNumber;
      clk.qtr = date.quarter;

      clk.src = date.toFormat('MM-dd-yyyy, hh:mm:ss a');
      clk.now = date.valueOf();

      if (bal.slv != null)
        bal.slv({ tmeBit: { idx: 'create-time', dat: clk } });
      break;
  }

  return cpy;
};

export const compareTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  if (bal.val == null) bal.val = 0;

  bit = await ste.hunt(ActTme.READ_TIME, { idx: bal.idx });
  var idxBit = bit.tmeBit.dat;

  bit = await ste.hunt(ActTme.READ_TIME, { idx: bal.src });
  var srcBit = bit.tmeBit.dat;

  var objIdx = {
    year: idxBit.yrs,
    month: idxBit.mth,
    day: idxBit.day,
    hour: idxBit.hrs,
    second: idxBit.sec,
  };
  var idxNow = DateTime.fromObject(objIdx);

  var objSrc = {
    year: srcBit.yrs,
    month: srcBit.mth,
    day: srcBit.day,
    hour: srcBit.hrs,
    second: srcBit.sec,
  };
  var srcNow = DateTime.fromObject(objSrc);

  var comp;

  if (bal.val == 1)
    comp = idxNow.diff(srcNow, [
      'days',
      'hours',
      'years',
      'weeks',
      'seconds',
      'months',
      'minutes',
    ]);
  else if (bal.val == 0)
    comp = srcNow.diff(idxNow, [
      'days',
      'hours',
      'years',
      'weeks',
      'seconds',
      'months',
      'minutes',
    ]);

  var value = comp.values;

  var clkBit: ClockBit = {
    idx: 'compare-clock',
    yrs: value.years,
    mth: value.months,
    wek: value.weeks,
    day: value.days,
    hrs: value.hours,
    min: value.minutes,
    sec: value.seconds,
  };

  if (bal.slv != null)
    bal.slv({ tmeBit: { idx: 'compare-clock', dat: clkBit } });

  return cpy;
};

//does not really work
export const reduceTime = async (cpy: TimeModel, bal: TimeBit, ste: State) => {
  var bit;

  if ((bal.idx = null)) bal.idx = 'tme00';

  bit = await ste.hunt(ActTme.READ_TIME, { idx: bal.idx });
  var idxBit = bit.tmeBit.dat;

  var date = DateTime.local(
    idxBit.yrs,
    idxBit.mth,
    idxBit.day,
    idxBit.hrs,
    idxBit.min,
    idxBit.sec,
  );

  var mod = {
    years: 0,
    quarters: 0,
    months: 0,
    weeks: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  var clk: ClockBit = bal.bit;
  if (clk == null) clk = { idx: bal.idx };

  if (clk.idx == null) clk.idx = bal.idx;
  if (clk.yrs != null) mod.years = clk.yrs;
  if (clk.qtr != null) mod.quarters = clk.qtr;
  if (clk.mth != null) mod.months = clk.mth;
  if (clk.wek != null) mod.weeks = clk.wek;
  if (clk.hrs != null) mod.hours = clk.hrs;
  if (clk.min != null) mod.minutes = clk.min;
  if (clk.sec != null) mod.seconds = clk.sec;

  var now = date.minus(mod);

  clk.yrs = now.year;
  clk.mth = now.month;
  clk.day = now.day;
  clk.hrs = now.hour;
  clk.min = now.minute;
  clk.sec = now.second;
  clk.cnt = Math.floor(now.diff(DateTime.local(clk.yrs, 1, 1), 'days').days);
  clk.wek = now.weekNumber;
  clk.qtr = now.quarter;

  clk.src = now.toFormat('MM-dd-yyyy, hh:mm:ss a');
  clk.now = now.valueOf();

  bit = await ste.hunt(ActTme.WRITE_TIME, { idx: bal.idx, dat: clk });
  if (bal.slv != null)
    bal.slv({ tmeBit: { idx: 'reduce-time', dat: bit.tmeBit.dat } });

  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { TimeModel } from '../time.model';
import TimeBit from '../fce/time.bit';
import State from '../../99.core/state';
import { DateTime } from 'luxon';
import * as TIME from '../../val/time';
import ClockBit from '../fce/clock.bit';
