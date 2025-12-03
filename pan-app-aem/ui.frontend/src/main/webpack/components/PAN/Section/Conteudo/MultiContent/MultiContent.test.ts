import ButtonAndBlock from './MultiContent';

describe('ButtonAndBlock', () => {
  let buttonAndBlock: ButtonAndBlock;

  beforeEach(() => {
    document.body.innerHTML = `
      <div>
        <button data-js="button">Button 1</button>
        <button data-js="button">Button 2</button>
      </div>
      <div>
        <div data-js="bloco">Block 1</div>
        <div data-js="bloco">Block 2</div>
      </div>
    `;
    buttonAndBlock = new ButtonAndBlock();
  });

  test('should initialize the first button and block', () => {
    expect(buttonAndBlock.buttons[0].classList.contains('active')).toBe(true);
    expect(buttonAndBlock.blocks[0].classList.contains('d-none')).toBe(false);
  });

  test('should add and remove classes on button click', () => {
    const button2 = document.querySelectorAll('[data-js=button]')[1];
    const block2 = document.querySelectorAll('[data-js=bloco]')[1];

    button2.dispatchEvent(new Event('click'));

    expect(buttonAndBlock.buttons[0].classList.contains('active')).toBe(false);
    expect(button2.classList.contains('active')).toBe(true);

    expect(buttonAndBlock.blocks[0].classList.contains('d-none')).toBe(true);
    expect(block2.classList.contains('d-none')).toBe(false);
  });
});
