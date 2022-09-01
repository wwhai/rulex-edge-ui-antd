// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 系统参数 获取首页dashboard数据 GET /api/v1/system */
export async function getSystem(options?: { [key: string]: any }) {
  return request<{
    code: number;
    msg: string;
    data: {
      alloc?: number;
      cpuPercent?: number;
      diskInfo?: number;
      osArch?: string;
      startedTime?: string;
      system?: number;
      total?: number;
      version?: string;
    };
  }>('/api/v1/system', {
    method: 'GET',
    ...(options || {}),
  });
}
