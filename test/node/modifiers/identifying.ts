import test from 'ava';
import { adze } from '../../../src';

global.ADZE_ENV = 'dev';

test('label prints correctly', (t) => {
  const { render } = adze().label('test').log('This log has a label.');
  if (render) {
    const [_, args] = render;
    t.is(args[1], '[test] ');
  } else {
    t.fail();
  }
});

test('log with single namespace prints correctly', (t) => {
  const { render } = adze().ns('test').log('This log has a label.');
  if (render) {
    const [_, args] = render;
    t.is(args[1], '#test ');
  } else {
    t.fail();
  }
});

test('log with multiple namespaces prints correctly', (t) => {
  const { render } = adze().ns(['test', 'test2']).log('This log has a label.');
  if (render) {
    const [_, args] = render;
    t.is(args[1], '#test #test2 ');
  } else {
    t.fail();
  }
});