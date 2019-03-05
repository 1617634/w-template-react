
const detailData = {
  code: '1',
  desc: '查询成功',
  data: {
    banner: [
      "//img.alicdn.com/imgextra/i8/T1HIx_XnBzXXaJJNva_091329.jpg_640x640q85s150_.webp", "//img.alicdn.com/imgextra/i4/388223/T2eBagXeVXXXXXXXXX_!!388223.jpg_640x640q85s150_.webp",
      "//img.alicdn.com/imgextra/i3/388223/TB2L_b9jFXXXXXfXpXXXXXXXXXX_!!388223.jpg_640x640q85s150_.webp",
      "//img.alicdn.com/imgextra/i3/388223/TB2KZDVjFXXXXb3XpXXXXXXXXXX_!!388223.jpg_640x640q85s150_.webp",
      "//img.alicdn.com/imgextra/i3/388223/TB2Himuhx6I8KJjSszfXXaZVXXa_!!388223.jpg_640x640q85s150_.webp"]
  }
}

module.exports = {
  'GET /api/detail': detailData,
  'POST /api/buycar': (req, res) => {
    res.end(JSON.stringify({code:1, message: 'Ok' }));
  },
}
