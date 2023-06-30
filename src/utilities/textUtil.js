export function textShrink(textgot) {
  let width;
  // checks screen width
  function widthResizer() {
    let widthd = window.innerWidth;
    width = widthd;
    return width;
  }

  console.log(widthResizer());
  // makes first alphabet caps
  const neat = (textgot) => {
    let firstChar = textgot.slice(0, 1);
    firstChar = firstChar.toUpperCase();
    let restChar = textgot.slice(1, textgot.length);
    restChar = restChar.toLowerCase();
    const newName = firstChar + restChar;

    return newName;
  };

  if (widthResizer() <= 375) {
    if (textgot.length <= 22) {
      return neat(textgot);
    } else if (textgot.slice(21, 22) === " ") {
      let short = textgot.slice(0, 21);
      let completeShort = short + "...";

      return neat(completeShort);
    } else {
      let short = textgot.slice(0, 21);
      let completeShort = short + "...";
      return neat(completeShort);
    }
  } else if (widthResizer() > 375 && widthResizer() < 450) {
    if (textgot.length <= 32) {
      return neat(textgot);
    } else if (textgot.slice(31, 32) === " ") {
      let short = textgot.slice(0, 31);
      let completeShort = short + "...";

      return neat(completeShort);
    } else {
      let short = textgot.slice(0, 31);
      let completeShort = short + "...";
      return neat(completeShort);
    }
  } else {
    return textgot;
  }
}

export function neat(textgot) {
  let firstChar = textgot.slice(0, 1);
  firstChar = firstChar.toUpperCase();
  let restChar = textgot.slice(1, textgot.length);
  restChar = restChar.toLowerCase();
  const newName = firstChar + restChar;

  return newName;
}

export function eventAddressTrimmer(textgot) {
  if (textgot.length < 43) {
    return neat(textgot);
  } else if (textgot.slice(42, 43) === " ") {
    let short = textgot.slice(0, 41);
    let completeShort = short + "...";

    return neat(completeShort);
  } else {
    let short = textgot.slice(0, 41);
    let completeShort = short + "...";
    return neat(completeShort);
  }
}