// pages/admin.js
import React, { useEffect } from 'react'; // 导入 React 库和 useEffect 钩子
import { useRouter } from 'next/router'; // 导入 useRouter 钩子
import cookie from 'js-cookie'; // 导入 cookie 库
import Layout from '../components/Layout'; // 导入 Layout 组件
import blogConfig from '../blog.config'; // 导入博客配置

const AdminPage = () => {
  const router = useRouter(); // 获取路由对象

  useEffect(() => {
    // 在组件挂载时检查用户身份
    const token = cookie.get('token'); // 从 Cookie 中获取令牌
    if (!token) {
      // 如果没有令牌，重定向到登录页面
      router.push('/login');
    }
  }, [router]); // 依赖于 router

  return (
    <Layout>
      <h1>管理页面</h1>
      {/* 这里是管理页面的内容 */}
    </Layout>
  );
};

export default AdminPage; // 导出 AdminPage 组件
