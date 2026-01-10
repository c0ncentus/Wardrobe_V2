import { List } from "./components/base/List/List";

export const Demo: React.FC<any> = ({}) => {

  return <div>
<List
  itemDefaults={{
    bg: 'slate-800',
    text: 'white',
    padding: 'p-4',
  }}
  items={[
    {
      content: 'Style Gothic',
      icon: { type: 'fontawesome', value: 'fas fa-cog' },
      style: {
        bg: 'gradient-to-r from-purple-900 to-black',
        text: 'purple-300',
      },
    },
    {
      content: 'Style Kawaii',
      icon: { type: 'emoji', value: '🌸' },
      style: {
        bg: 'gradient-to-r from-pink-400 to-purple-400',
        text: 'pink-100',
      },
    },
  ]}
/>

    </div>
};
