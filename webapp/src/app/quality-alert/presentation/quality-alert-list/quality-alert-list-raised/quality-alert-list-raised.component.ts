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

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ReceivedQualityAlertTableBuilder } from 'src/app/quality-alert/builder/received-quality-alert-table.builder';
import { GroupedAlert } from 'src/app/quality-alert/model/grouped-alerts.model';
import { Table } from 'src/app/shared/components/table/table';

/**
 *
 *
 * @export
 * @class QualityAlertListRaisedComponent
 */
@Component({
  selector: 'app-quality-alert-list-raised',
  templateUrl: './quality-alert-list-raised.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QualityAlertListRaisedComponent {
  /**
   * Raised quality alerts
   *
   * @type {GroupedAlert[]}
   * @memberof QualityAlertListRaisedComponent
   */
  @Input() qualityAlerts: GroupedAlert[];

  /**
   * Table builder
   *
   * @type {Table}
   * @memberof QualityAlertListRaisedComponent
   */
  public table: Table;

  /**
   * Types of quality alerts
   *
   * @type {string}
   * @memberof QualityAlertListRaisedComponent
   */
  public filterItems = ['Queued', 'Received'];

  /**
   * @constructor QualityAlertListRaisedComponent
   * @memberof QualityAlertListRaisedComponent
   */
  constructor() {
    this.table = ReceivedQualityAlertTableBuilder.getTable();
  }
}
