// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 日志列表 系统日志列表 GET /api/v1/logs */
export async function getLogs(options?: { [key: string]: any }) {
  return request<{ code: number; msg: string; data: string[] }>('/api/v1/logs', {
    method: 'GET',
    ...(options || {}),
  });
}
