import Mock from 'mockjs'

// 用户数据
const users = []

// 注册接口
Mock.mock('/api/user/auth/register', 'post', (options) => {
    const { username, password, realName, inviteCode } = JSON.parse(options.body)

    // 检查用户名是否已存在
    if (users.find(u => u.username === username)) {
        return {
            code: 400,
            message: '用户名已存在'
        }
    }

    // 生成新用户
    const newUser = {
        id: Mock.Random.id(),
        username,
        password,
        realName,
        inviteCode,
        newInviteCode: Mock.Random.string(8),
        balance: 0,
        level: 1,
        status: 1,
        createdAt: Mock.Random.now()
    }

    users.push(newUser)

    return {
        code: 200,
        message: '注册成功',
        data: {
            token: Mock.Random.string(32),
            userInfo: {
                ...newUser,
                password: undefined
            }
        }
    }
})

// 登录接口
Mock.mock('/api/user/auth/login', 'post', (options) => {
    const { username, password } = JSON.parse(options.body)

    const user = users.find(u => u.username === username && u.password === password)

    if (!user) {
        return {
            code: 401,
            message: '用户名或密码错误'
        }
    }

    return {
        code: 200,
        message: '登录成功',
        data: {
            token: Mock.Random.string(32),
            userInfo: {
                ...user,
                password: undefined
            }
        }
    }
})

// 其他接口...
Mock.mock(/\/api\/products/, 'get', {
    code: 200,
    data: {
        'list|5-10': [{
            'id|+1': 1,
            'name': '@ctitle',
            'description': '@cparagraph(1)',
            'price|100-5000': 100,
            'minLevel|1-4': 1,
            'status|1': [0, 1],
            'image': '@image("200x200")'
        }],
        'total|50-200': 50
    }
})

export default Mock