
const componets = {}
const importAll = r => r.keys().forEach(key => {
  let component = r(key).default
  let name = component.name
  if (!name) return console.error(`Не указано имя компонента. ${component.__file}`)
  if (componets[name]) return console.error(`Компонент уже существует. ${name}`)
  componets[name] = component
})

importAll(require.context('./', true, /index\.vue$/))

export default componets
