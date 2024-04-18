import { v4 } from 'uuid';

export const elementTypes = {
  Text: 'Text',
  Image: 'Image',
  Video: 'Video',
  Code: 'Code',
}

export const commonConfig = {
  style: {},
  slides: [
    {
      id: v4(),
      style: {},
      elements: [
        {
          id: v4(),
          type: elementTypes.Text,
          style: {},
          content: 'Title',
        },
      ],
    },
  ],
};

export const textConfig = {
  id: v4(),
  type: elementTypes.Text,
  style: {
    x: 0,
    y: 0,
    width: 100,
    height: 10,
    fontSize: 1,
    textAlign: 'start',
    color: '#000',
  },
  content: 'Title'
}
export const imageConfig = {
  id: v4(),
  type: elementTypes.Image,
  style: {
    x: 0,
    y: 0,
    width: 50,
    height: 30
  },
  content: 'https://tse2-mm.cn.bing.net/th/id/OIP-C.xIPITQpEBEXQkuDzc0CqBQHaEU?w=294&h=180&c=7&r=0&o=5&dpr=2&pid=1.7'
}
export const videoConfig = {
  id: v4(),
  type: elementTypes.Video,
  style: {
    autoPlay: false,
  },
  content: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
}
export const codeConfig = {
  id: v4(),
  type: elementTypes.Code,
  style: {
    x: 0,
    y: 0,
    width: 100,
    height: 30,
    fontSize: 1,
  },
  content: 'print("hello")'
}
