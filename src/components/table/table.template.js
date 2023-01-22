const CODES = {
  A: 65,
  Z: 90
}

function createCell() {
  return `
    <div class="cell" contenteditable></div>
  `
}

function toColumn(name) {
  return `
    <div class="column">${name}</div>
  `
}

function createRow(content, rowInfo = '') {
  return `
    <div class="row">
        <div class="row-info">${rowInfo}</div>
        <div class="row-data">${content}</div>
    </div>
  `
}

function toChar(_, index) {
  return String.fromCharCode(CODES.A + index)
}

export function createTable(rowCount = 15) {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []
  const cols = new Array(colsCount)
    .fill('')
    .map(toChar)
    .map(toColumn)
    .join('')

  rows.push(createRow(cols))

  for (let i = 0; i < rowCount; i++) {
    const cells = new Array(colsCount)
      .fill('')
      .map(createCell)
      .join('')

    rows.push(createRow(cells, String(i + 1)))
  }

  return rows.join('')
}
