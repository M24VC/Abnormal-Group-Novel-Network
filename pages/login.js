// pages/login.js
import React, { useState } from 'react'; // 导入 React 库
import { useRouter } from 'next/router'; // 导入 useRouter 钩子
import cookie from 'js-cookie'; // 导入 cookie 库
import blogConfig from '../blog.config'; // 导入博客配置

const LoginPage = () => {
  const [username, setUsername] = useState(''); // 管理用户名状态
  const [password, setPassword] = useState(''); // 管理密码状态
  const router = useRouter(); // 获取路由对象

  const handleLogin = async (e) => {
    e.preventDefault(); // 阻止表单默认提交行为

    // 使用 blogConfig 中的用户名和密码进行身份验证
    if (username === blogConfig.login.username && password === blogConfig.login.password) {
      // 认证成功，设置 cookie
      cookie.set('token', 'your_jwt_token'); // 将令牌保存到 Cookie
      router.push('/admin'); // 跳转到管理页面
    } else {
      alert('用户名或密码错误'); // 提示错误信息
    }
  };

  return (
    <div>
      <h1>登录</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="用户名"
          value={username}
          onChange={(e) => setUsername(e.target.value)} // 更新用户名状态
          required
        />
        <input
          type="password"
          placeholder="密码"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // 更新密码状态
          required
        />
        <button type="submit">登录</button> {/* 提交登录表单 */}
      </form>
    </div>
  );
};

export default LoginPage; // 导出登录页面组件
