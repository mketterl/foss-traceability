/*
 * Copyright 2021 The PartChain Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 *
 *
 * @export
 * @interface CommentModel
 */
export interface CommentModel {
  comment_id: string;
  alert_id: string;
  alert_origin_company: string;
  alert_target_company: string;
  alert_message: string;
  company_name: string;
}

/**
 *
 *
 * @export
 * @interface CommentBody
 */
export interface CommentBody {
  message: string;
  originCompany: string;
  targetCompany: string;
  company: string;
  timestamp: string;
}
