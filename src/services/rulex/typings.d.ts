declare namespace API {
  type deleteDevicesParams = {
    uuid: string;
  };

  type deleteOutendsParams = {
    uuid?: string;
  };

  type deleteRulesParams = {
    uuid?: string;
  };

  type wangguanziyuan = {
    type: string;
    name: string;
    description: string;
    config: Record<string, any>;
  };
}
