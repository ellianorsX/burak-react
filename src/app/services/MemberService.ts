import axios from "axios";
import { serverApi } from "../../lib/config";
import { Member } from "../../lib/types/member";

class MemberService {
  private readonly path: string;

  constructor() {
    this.path = serverApi;
  }

  public async getTopUsers(): Promise<Member[]> {
    try {
      const url = this.path + "/member/top-users";
      const result = await axios.get(url);
      console.log("getTopUsers:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getTopUsers:", err);
      throw err;
    }
  }

  public async getRestaurants(): Promise<Member[]> {
    try {
      const url = this.path + "/member/restaurants";
      const result = await axios.get(url);
      console.log("getRestaurants:", result);

      return result.data;
    } catch (err) {
      console.log("Error, getRestaurants:", err);
      throw err;
    }
  }
}

export default MemberService;
