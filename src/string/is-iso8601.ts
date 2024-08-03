import type { Brand } from 'ts-brand';
import { isValidDate } from '../date/is-valid-date.js';
import { isString } from './is-string.js';

export type Iso8601 = Brand<string, 'Iso8601'>;

const yyyyMmDd = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
const yyyyMmDdThhMm =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2})$/;
const yyyyMmDdThhMmSs =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})$/;
const yyyyMmDdThhMmSsSSS =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})$/;
const yyyyMmDdThhMmSsSSSZ =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})Z$/;
const yyyyMmDdThhMmSsOffset =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})([+-][0-9]{2}:[0-9]{2})$/;
const yyyyMmDdThhMmSsSSSOffset =
  /^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})\.([0-9]{3})([+-][0-9]{2}:[0-9]{2})$/;

/**
 * Asserts that a value is a String which conforms to common use-cases of the ISO 8601 standard representation of dates
 * and times.
 *
 * - '1999-12-31'
 * - '1999-12-31T23:59'
 * - '1999-12-31T23:59:59'
 * - '1999-12-31T23:59:59.000'
 * - '1999-12-31T23:59:59.000Z'
 * - '1999-12-31T23:59:59+01:00'
 * - '1999-12-31T23:59:59-01:00'
 * - '1999-12-31T23:59:59.000+01:00'
 * - '1999-12-31T23:59:59.000-01:00'
 *
 * @tags guard, strings, dates
 */
export const isIso8601 = (value: unknown): value is Iso8601 => {
  return (
    isString(value) &&
    (yyyyMmDd.test(value) ||
      yyyyMmDdThhMm.test(value) ||
      yyyyMmDdThhMmSs.test(value) ||
      yyyyMmDdThhMmSsSSS.test(value) ||
      yyyyMmDdThhMmSsSSSZ.test(value) ||
      yyyyMmDdThhMmSsOffset.test(value) ||
      yyyyMmDdThhMmSsSSSOffset.test(value)) &&
    isValidDate(new Date(value))
  );
};
