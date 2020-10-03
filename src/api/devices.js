import request from "@/utils/request";

export function getListById(params) {
  return request({
    url: "/device-list/getDeviceById",
    method: "get",
    params
  });
}
